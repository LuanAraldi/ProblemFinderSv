## **Referência API** ##
----------
## Problems ##

POST create a new problem
> /problem/new
```
    {
    	"consumoCombustivel" : 0.1,
    	"forcaMotor" : 0.8,
    	"fumaca" : 0.5,
    	"sujeira" : 0.2,
    	"temperatura" : 0.1,
    	"pressaoDeOleo" : 0.9,
    	"solucao" : "teste de solução 2"
    }
```

POST solves a problem
> /problem/solve
```
    {
    	"problem" : {
    		"pressaoDeOleo": 0.6,
            "temperatura": 0.6,
            "sujeira": 0.6,
            "fumaca": 1,
            "forcaMotor": 0.5,
            "consumoCombustivel": 0.4
    	},
    	"options" : {
    		"consumoCombustivel" : 0.052631579,
            "forcaMotor" : 0.105263158,
            "fumaca" : 0.157894737,
            "sujeira" : 0.184210526,
            "temperatura" : 0.236842105,
            "pressaoDeOleo" : 0.263157895
    	}
    }
```

RETURNS
Retorna o objeto mais próximo do problema enviado, dentro de debug se encontram a distancia total e a distancia de cada
variavel com a variavel correspondente do problema enviado, sendo 0 o mais proximo possivel e 1 o mais distante

```
    {
        "_id": "5907b2241b27ca4306db82e5",
        "solucao": "teste de solução",
        "pressaoDeOleo": 0.4,
        "temperatura": 0.6,
        "sujeira": 0.6,
        "fumaca": 1,
        "forcaMotor": 0.5,
        "consumoCombustivel": 0.4,
        "updatedAt": "2017-05-01T22:09:40.997Z",
        "createdAt": "2017-05-01T22:09:40.997Z",
        "__v": 0,
        "debug": {
            "distance": 0.0027700831080332395,
            "details": {
            "consumoCombustivel": 0,
            "forcaMotor": 0,
            "fumaca": 0,
            "sujeira": 0,
            "temperatura": 0,
            "pressaoDeOleo": 0.0027700831080332395
            }
        }
    }
```

GET get all problems
> /problem

https://problemfindersv.herokuapp.com/
