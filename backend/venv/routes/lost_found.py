from flask import Blueprint, request, jsonify
from pymongo import MongoClient
from datetime import datetime

bp = Blueprint('lost_found', __name__, url_prefix='/api/lost_found')
client = MongoClient("mongodb+srv://campus_user:user@campuscluster.w190bnf.mongodb.net/?retryWrites=true&w=majority&appName=CampusCluster")
db = client.campus_db

@bp.route('/upload', methods=['POST'])
def upload_item():
    data = request.json

    item = {
        "name_of_item": data.get("name_of_item"),
        "status": data.get("status"),  # "lost" or "found"
        "location": data.get("location"),
        "description": data.get("description"),
        "contact": data.get("contact"),
        "image_url": data.get("image_url", None),  # optional
        "created_at": datetime.utcnow()
    }

    db.lost_found.insert_one(item)
    return jsonify({"message": "Item uploaded successfully"}), 201


@bp.route('/list', methods=['GET'])
def list_items():
    items = list(db.lost_found.find().sort("created_at", -1))  # latest first
    for i in items:
        i['_id'] = str(i['_id'])
    return jsonify(items)
