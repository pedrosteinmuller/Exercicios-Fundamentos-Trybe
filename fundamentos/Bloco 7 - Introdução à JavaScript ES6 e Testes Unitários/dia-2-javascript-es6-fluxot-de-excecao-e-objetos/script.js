const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom",
};

console.log(Object.keys(student2));

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (const index in arrayOfSkills) {
    console.log(
      `${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`
    );
  }
};

console.log("Estudante 1");
listSkills(student1);

console.log("Estudante 2");
listSkills(student2);

const person = {
  name: "Roberto",
};

const lastName = {
  lastName: "Silva",
};

const newPerson = Object.assign({}, person, lastName);
newPerson.name = "Gilberto";
console.log(newPerson);
console.log(person);

// Exercicio parte 1

function verifyValues(value1, value2) {
  if (!value1 || !value2) {
    throw new Error("Preencha os campos para efetuar a soma!");
  }
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    throw new Error("Os valores precisam ser numéricos! Tente novamente.");
  }
}
function sum() {
  try {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    verifyValues(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById("result").innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.getElementById("result").innerHTML = `Erro: ${error.message}`;
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
  } finally {
    document.getElementById("value1").value = ""; // Apagar os valores do elemento que possui o id value1
    document.getElementById("value2").value = ""; // Apagar os valores do elemento que possui o id value2
  }
}

window.onload = () => {
  const button = document.getElementById("button");
  button.addEventListener("click", sum);
};

// Exercicio parte 2

const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
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
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const address = 'address'
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const customerOrder = order.name;
  const customerPhone = order.phoneNumber;
  const customerAdress = order.address.street;
  const customerNumber = order.address.number;
  const customerAp = order.address.apartment;

  console.log(`Olá ${deliveryPerson}, entrega para: ${customerOrder}, Telefone: ${customerPhone}, R: ${customerAdress}, Nº: ${customerNumber}, AP: ${customerAp}`);
};

customerInfo(order);


const orderModifier = (order) => {
  const newPerson = order.name = 'Luiz Silva';
  const newTotalPrice = order.payment.total = '50';
  const pizzas = Object.keys(order.order.pizza);
  const thirdItem = order.order.drinks.coke.type;

  console.log(`Olá ${newPerson}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${thirdItem} é R$ ${newTotalPrice},00.`);

};

orderModifier(order);

// Exercicio parte III

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1

// const addItem = (obj, key, value) => {
//   obj[key] = value;
// }

// addItem(lesson2, 'turno', 'noite')
// console.log(lesson2);

// 2

// const listKeys = (obj) => Object.keys(obj);

// console.log(listKeys(lesson1));

// 3

// const size = (obj) => Object.keys(obj);

// console.log(size(lesson1).length);

// 4

// const size = (obj) => Object.values(obj);

// console.log(size(lesson1));

// 5

// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// // console.log(allLessons);

// // 6

// const allStudents = (lessons) => {

//   const array = Object.keys(lessons);
//   let total = 0;

//   for (let index in array) {
//     total += lessons[array[index]].numeroEstudantes;
//   }
//   return total;
// }

// console.log(allStudents(allLessons));

// 7

// const getValueByNumber = (object, number) => Object.values(object)[number];
// console.log(getValueByNumber(lesson1, 3));

// 8

const verifyPair = (obj, key, value) => {
 const array = Object.entries(obj);
 let exist = false;
 for (let index in array){
  if (array[index][0] === key && array[index][1] === value) exist = true;
 }
 return exist;
}

console.log(verifyPair(lesson2,'professor','Carlos'));
