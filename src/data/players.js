const players = [
  {
    id: 1,
    name: "Marcelo",
    age: 22,
    position: "Armador",
    attackoverrall: 95,
    defenseoverrall: 80,
    energy: 99,
    contractValue: '500.000,00',
    contractTime: 4
  },
  {
    id: 2,
    name: "Marcelo",
    age: 22,
    position: "Armador",
    attackoverrall: 95,
    defenseoverrall: 80,
    energy: 32,
    contractValue: '500.000,00',
    contractTime: 4
  },
  {
    id: 3,
    name: "Marcelo",
    age: 22,
    position: "Armador",
    attackoverrall: 95,
    defenseoverrall: 80,
    energy: 20,
    contractValue: '500.000,00',
    contractTime: 4
  },
  {
    id: 4,
    name: "Marcelo",
    age: 22,
    position: "Armador",
    attackoverrall: 95,
    defenseoverrall: 80,
    energy: 80,
    contractValue: '500.000,00',
    contractTime: 4
  },
  {
    id: 5,
    name: "Marcelo",
    age: 22,
    position: "Armador",
    attackoverrall: 95,
    defenseoverrall: 80,
    energy: 100,
    contractValue: '500.000,00',
    contractTime: 4
  },
];

const randomEnergy  =  Math.floor(Math.random() * (Math.floor(100) - Math.ceil(70 + 1)) + 70)

export default players
