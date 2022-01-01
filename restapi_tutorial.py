from flask import Flask, request
from flask_restful import Resource, Api, reqparse
app = Flask (__name__)
api = Api(app)

db = {
    'A': {
        "id" : "001",
        "age": "24",
        "height": "184",
    }
}


class All(Resource):
    def get(self):
        return db
api.add_resource(All, '/users')

parser = reqparse.RequestParser()
parser.add_argument('id')
parser.add_argument('age')
parser.add_argument('height')

class User(Resource):
    def get(self, user_name):
        if user_name in db.keys():
            return db[user_name]
        else:
            return {'message': f"{user_name} not exist!"}, 204
    def post(self, user_name):
        if user_name in db.keys():
            return {'message': f"{user_name} already exist!"}, 404
        else:
            args= parser.parse_args()
            print(args)
            db[user_name] = {
                'id': args.id,
                "age": args.age,
                "height": args.height,
            }
            return {
                'data': db[user_name]
            }, 201
    def put(self, user_name):
        if user_name in db.keys():
            args= parser.parse_args()
            print(args)
            for arg in args.keys():
                if args[arg] is not None:
                    db[user_name][arg] = args[arg]
            return db[user_name], 201
        else:
            return {
                'message': f"{user_name} not exist!"
            }, 201
    def delete(self, user_name):
        if user_name in db.keys():
            del db[user_name]
            return {
                'message': 'success'
            }
        else:
            return {
                'message': f"{user_name} not exist!"
            }, 404
api.add_resource(User, '/users/<string:user_name>')

if __name__ == "__main__":
    app.run(debug = True)