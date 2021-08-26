from fastapi import FastAPI

from pydantic import BaseModel

app = FastAPI()

# modelo
class Cliente(BaseModel):
    id: int
    nome: str
    numero_do_container: str
    tipo: str
    status: str
    categoria: str

# rota para cadastrar o cliente.

@app.post('/cliente')
def cadastrar_cliente(cliente: Cliente):
    #regras de negócio
    base_de_dados.append(cliente)
    return cliente         

# base de dados

base_de_dados = [
    Cliente(id=1,
     nome='Felipe',
     numero_do_container ='TEST1234567',
     tipo= '20/40',
     status= 'cheio/vazio',
     categoria= 'importação/exportação'),

     Cliente(id=2,
     nome='Marcio',
     numero_do_container ='TEST1234567',
     tipo= '20/40',
     status= 'cheio/vazio',
     categoria= 'importação/exportação'),       
]    

# rota get all

@app.get('/cliente')
def get_todos_os_clientes():
    return base_de_dados

# rota get id

@app.get('/cliente/{id_cliente}')
def get_cliente_usando_id(id_cliente: int):
    for cliente in base_de_dados:
        if(cliente.id == id.cliente):
            return cliente    

    return {'Status': 404, 'Mensagem': 'Não encontrou o cliente'}   

# rota para cadastrar o cliente.

@app.post('/cliente')
def cadastrar_cliente(cliente: Cliente):
    #regras de negócio
    base_de_dados.append(cliente)
    return cliente         