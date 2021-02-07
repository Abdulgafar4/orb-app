# from flask import json
from app.resources.pagination import Pagination
from app.resources.base_resources import MongoResourceOps, MongoResource
import datetime
import logging
from bson.objectid import ObjectId
from flask.helpers import make_response
from flask_restful import Api, reqparse
import json

search_parser = reqparse.RequestParser()
search_parser.add_argument('filter')
search_parser.add_argument('range')
search_parser.add_argument('sort')

logger = logging.getLogger(__name__)

class Products(MongoResource):

    def __init__(self) -> None:
        super().__init__('product')

class ProductOps(MongoResourceOps):

    def __init__(self) -> None:
        super().__init__('product')

class Stock(MongoResource):

    def __init__(self) -> None:
        super().__init__('stock')

class StockOps(MongoResourceOps):

    def __init__(self) -> None:
        super().__init__('stock')

class Category(MongoResource):

    def __init__(self) -> None:
        super().__init__('category')

class CategoryOps(MongoResourceOps):

    def __init__(self) -> None:
        super().__init__('category')

class Customers(MongoResource):

    def __init__(self) -> None:
        super().__init__('customers')

class CustomersOps(MongoResourceOps):

    def __init__(self) -> None:
        super().__init__('customers')

class Employee(MongoResource):

    def __init__(self) -> None:
        super().__init__('employee')

class EmployeeOps(MongoResourceOps):

    def __init__(self) -> None:
        super().__init__('employee')


class Suppliers(MongoResource):

    def __init__(self) -> None:
        super().__init__('suppliers')

class SuppliersOps(MongoResourceOps):

    def __init__(self) -> None:
        super().__init__('suppliers')

class Expenses(MongoResource):

    def __init__(self) -> None:
        super().__init__('expenses')

class ExpensesOps(MongoResourceOps):

    def __init__(self) -> None:
        super().__init__('expenses')


class Appointment(MongoResource):

    def __init__(self) -> None:
        super().__init__('appointment')

class AppointmentOps(MongoResourceOps):

    def __init__(self) -> None:
        super().__init__('appointment')


class Credit(MongoResource):

    def __init__(self) -> None:
        super().__init__('credit')

class CreditOps(MongoResourceOps):

    def __init__(self) -> None:
        super().__init__('credit')

class Sales(MongoResource):

    def __init__(self) -> None:
        super().__init__('sales')

class SalesOps(MongoResourceOps):

    def __init__(self) -> None:
        super().__init__('sales')


api = Api(prefix="/api")
api.add_resource(Products, "/product")
api.add_resource(ProductOps, "/product/<id>")
api.add_resource(Stock, "/stock")
api.add_resource(StockOps, "/stock/<id>")
api.add_resource(Category, "/category")
api.add_resource(CategoryOps, "/category/<id>")
api.add_resource(Customers, "/customer")
api.add_resource(CustomersOps, "/customer/<id>")
api.add_resource(Employee, "/employee")
api.add_resource(EmployeeOps, "/employee/<id>")
api.add_resource(Suppliers, "/suppliers")
api.add_resource(SuppliersOps, "/suppliers/<id>")
api.add_resource(Expenses, "/expenses")
api.add_resource(ExpensesOps, "/expenses/<id>")
api.add_resource(Appointment, "/appointments")
api.add_resource(AppointmentOps, "/appointments/<id>")
api.add_resource(Credit, "/credit")
api.add_resource(CreditOps, "/credit/<id>")
api.add_resource(Sales, "/sales")
api.add_resource(SalesOps, "/sales/<id>")


def default(o):
    if isinstance(o, (datetime.date, datetime.datetime)):
        return o.isoformat()
    if isinstance(o, ObjectId):
        return str(o)


@api.representation('application/json')
def output_json(data, code, headers=None):
    if type(data) is Pagination:
        resp = make_response(json.dumps(
            data.items, default=default), code)
        resp.headers.extend({'Content-Range': f'1/{data.total}'})
    else:
        resp = make_response(json.dumps(data, default=default), code)
    return resp
