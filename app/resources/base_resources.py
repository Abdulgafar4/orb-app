
from app.resources.pagination import Pagination
# from flask_jwt_extended import jwt_required
from flask import request
from app.extensions import mongo
import json
from flask_restful import Resource, reqparse
import re

search_parser = reqparse.RequestParser()
search_parser.add_argument('filter')
search_parser.add_argument('range')
search_parser.add_argument('perPage')
search_parser.add_argument('sort')

def replace_id(o):
    if o:
        o['id'] = o.pop('_id')
    return o
    
class MongoResource(Resource):
    def __init__(self, collection, fields=None):
        super().__init__()
        self.collection = collection
        self.keys = fields

    # @jwt_required
    def post(self):
        data = request.json
        if "id" in data:
            data["_id"] = str(data.pop("id"))
        res = mongo.db[self.collection].insert(data)
        return data

    # @jwt_required
    def get(self):
        data = search_parser.parse_args()
        range = json.loads(data['range']) if data['range'] else [0, 10]
        sort = json.loads(data['sort']) if data['sort'] else ['_id', 'ASC']
        fltr = json.loads(data['filter']) if data['filter'] else {}
        limit = range[1]-range[0]
        res = mongo.db[self.collection].find(fltr, self.keys)
        if res:
            res_limit = res.sort(sort[0], 1 if sort[1] == 'ASC' else -1).skip(range[0]).limit(limit)
            items = list(map(replace_id, res_limit))
            return Pagination(query=fltr, page=int(range[1]/limit), per_page=limit, total=res.count(), items=items)
        return []

class MongoResourceOps(Resource):

    def __init__(self, collection, fields=None):
        super().__init__()
        self.collection = collection
        self.keys = fields

    # @jwt_required
    def get(self, id):
        return replace_id(mongo.db[self.collection].find_one({'_id':id}, self.keys))

    # @jwt_required
    def put(self, id):
        data = request.json
        mongo.db[self.collection].replace_one({'_id':id}, data, upsert=True)
        return {'id':id, 'msg':'updated'}

    # @jwt_required
    def delete(self, id):
        res = mongo.db[self.collection].delete_one({'_id':id})
        return {'id':id, 'msg':'deleted'}