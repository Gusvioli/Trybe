const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const pegarValues = Object.values(order);
    console.log(`Olá ${pegarValues[3].delivery.deliveryPerson}, entrega para: ${pegarValues[0]}, Telefone: ${pegarValues[1]}, ${pegarValues[2].street}, Nº: ${pegarValues[2].number}, AP: ${pegarValues[2].apartment}`);
  }
  
  customerInfo(order);
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const pegarValues = Object.values(order);
    const pegarKeysPizza = Object.entries(pegarValues[3].pizza);
    const pegarKeysbebidas = Object.entries(pegarValues[3].drinks);
    pegarValues[0] = 'Luiz Silva';
    pegarValues[4].total = '50';

    console.log(`Olá ${pegarValues[0]}, o total do seu pedido de ${pegarKeysPizza[0][0]}, ${pegarKeysPizza[1][0]} e ${pegarKeysbebidas[0][1].type} é R$ ${pegarValues[4].total},00.`);
  }
  
  orderModifier(order);