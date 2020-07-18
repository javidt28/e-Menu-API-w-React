from pathlib import Path
import json
import flask

app = flask.Flask(__name__)

@app.route("/restaurants")
def get_restaurants():
    ''' Get Restaurants from a file'''
    return read_file("restaurants.json")

@app.route("/menus/<restaurant_id>")
def get_restaurant_menu(restaurant_id):
    ''' Fetch Restaurants menu '''
    restaurant_menus = read_file("menu.json")
    for menu in restaurant_menus["menus"]:
        if menu["restaurant_id"] == int(restaurant_id):
            return menu
    flask.abort(404)

def read_file(filename):
    ''' Read menu form file '''
    file = Path(filename)
    with open(file.absolute(),"r") as f:
        return json.load(f)

def write_to_file():
    ''' Write menu items to file '''
    pass


app.run(debug=True, port=3000)