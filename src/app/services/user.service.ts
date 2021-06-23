import { Injectable } from '@angular/core';
const USERS = 'users'
let gUsers = loadFromStorage(USERS)
if (!gUsers) gUsers = []
const LoggedInUser = 'user'
@Injectable({
  providedIn: 'root'
})

export class UserService {
  //mock the server  
  constructor() {
  }
  public getUser() {
    const loggedInUser = loadFromStorage(LoggedInUser)
    if (!loggedInUser) return { name: 'Guest', coins: 100, moves: [] }
    return loggedInUser
  }
  signup(name) {
    const user = { name, coins: 100, moves: [] }
    gUsers.push(user)
    saveToStorage(USERS, gUsers)
    saveToStorage(LoggedInUser, user)
    console.log(gUsers)
  }
  getEmptyUser() {
    return { name: '' }
  }
  addMove(contact, amount) {
    const move = {
      toId:contact._id,
      to: contact.name,
      at: Intl.DateTimeFormat('IL-il').format(Date.now()),
      amount
    }
    const user = this.getUser()
    user.moves.unshift(move)
    user.coins -= amount
    saveToStorage(LoggedInUser, user)
    console.log(user)
  }
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key)
  return JSON.parse(val)
}


