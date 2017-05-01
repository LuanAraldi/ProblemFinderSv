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
> /problem/new
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

GET get all problems
> /problem
