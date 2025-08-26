from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from datetime import datetime

bp = Blueprint('problems', __name__, url_prefix='/api/problems')
client = MongoClient("mongodb+srv://campus_user:user@campuscluster.w190bnf.mongodb.net/?retryWrites=true&w=majority&appName=CampusCluster")
db = client.campus_db

@bp.route('/report', methods=['POST'])
def report_problem():
    data = request.json
    data['status'] = 'Pending'
    data['created_at'] = datetime.utcnow()
    db.problems.insert_one(data)
    return jsonify({"message": "Problem reported successfully"}), 201

@bp.route('/list', methods=['GET'])
def list_problems():
    problems = list(db.problems.find())
    for p in problems:
        p['_id'] = str(p['_id'])
    return jsonify(problems)
