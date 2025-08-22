from flask import Flask,render_template
# Flask app setup
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('first.html')
@app.route('/VECSE_Blog')
def blog():
    return render_template('second.html')
if __name__ == '__main__':
    app.run(debug=True)
