// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Customer from './components/Customer.js'

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/any/1',
  'name': '유지원',
  'birthday': '950810',
  'gender': '여자',
  'job': '퍼블리셔'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/any/2',
  'name': '홍길동',
  'birthday': '870923',
  'gender': '남자',
  'job': '프로그래머'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any/3',
    'name': '이순신',
    'birthday': '000000',
    'gender': '남자',
    'job': '장군'
  },
]

class App extends Component {
  render() {
    return (
      <div className="">
        {
          customers.map(c =>  {
            return (
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
            )
          })
        }

      </div>
    )
  }
}

export default App;
