# Title: 
Flat Earth

# Description:
You are given an object. Write a function to flatten it, where the term flatten is defined as to get all the keys of nested objects and bring them to same level.

# Constraints:
Nil

# Sample Input:
{
  newObj: {
    obj2: {
      obj5: {
        one: 1,
      },
    },
  },
  obj3: {
    obj4: { two: 2 },
  },
};

# Sample Output:
{ 'newObj.obj2.obj5.one': 1, 'obj3.obj4.two': 2 }

# Test Cases:
    Input#1:
    {
    name: {
        first: "robin",
        last: "negi",
    },
    address: {
        city: {
        name: "Gwalior",
        },
        landmark: "Badri Marg",
        street: "22",
    },
    };

    Output#1:
    { 'name.first': 'robin',
    'name.last': 'negi',
    'address.city.name': 'Gwalior',
    'address.landmark': 'Badri Marg',
    'address.street': '22' }


    Input#2:
    {
    flavor: "vanilla",
    topping: {
        drizzle: "chocolava",
        sprinkle: "choco-chips",
    },
    cone: {
        type: "waffle",
        crust: {
        color: "dark",
        texture: "soft",
        },
    },
    };


    Output#2:
    { flavor: 'vanilla',
    'topping.drizzle': 'chocolava',
    'topping.sprinkle': 'choco-chips',
    'cone.type': 'waffle',
    'cone.crust.color': 'dark',
    'cone.crust.texture': 'soft' }

# Solution:
```javascript
function flattenObject(ob) {
    var toReturn = {};

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue;

        if ((typeof ob[i]) == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i]);
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue;

                toReturn[i + '.' + x] = flatObject[x];
            }
        } else {
            toReturn[i] = ob[i];
        }
    }
    return toReturn;
}
```