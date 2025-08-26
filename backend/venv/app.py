from flask import Flask
from routes.problems import bp as problems_bp
from routes.lost_found import bp as lost_found_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React to call Flask

# Register Blueprints
app.register_blueprint(problems_bp)
app.register_blueprint(lost_found_bp)

if __name__ == '__main__':
    app.run(debug=True)
