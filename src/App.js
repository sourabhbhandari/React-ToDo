  import React from 'react';
  import logo from './hack.gif';
  import './App.css';
  
  class App extends React.Component
  {
  
    constructor(props)
    {
      super(props);
      this.state = {
        newItem: "",
        list : []
      };
    }


    addItem(todoValue){
       if (todoValue !== "")
       {
         const newItem = {
           id: Date.now(),
           value: todoValue,
           isDone: false
         };

         const list = [...this.state.list];
         list.push(newItem);

         this.setState({
          list,
          newItem: ""
          
         });
       }
    }
  
    deleteItem(id)
    {
      const list = [...this.state.list];
      const updatedlist = list.filter(item => item.id !== id);
      this.setState({list: updatedlist})
    }


    updateInput(input)
    {
      this.setState({newItem:input});
    }

  render()
  {
    return(
      <div className='app-title'>
        <img src={logo} width='100' height='100' className='logo'/>
        <h1> Hexa ToDo App:</h1>
        <div className="Container">
          Create Your Task List Now :)
          <br/>
          <input 
            type="text" 
            className="input-text" 
            placeholder="Write your task here"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
          />
          
          <button className="add-btn"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
          >Add</button>
          <div className="list">
            <ul>
              {this.state.list.map(item => {
                return(
                  <li key={item.id}>
                    <input
                    type="checkbox"
                    name="idDone"
                    checked={item.isDone}
                    onChange={()=> {}}
                    />
                    {item.value}

                    <button 
                    className="btn"
                    onClick={() => this.deleteItem(item.id)}
                    >Delete</button>
                  </li>
                );
              })}
            
            </ul>
          </div>
        </div>
        <div>
          <footer class="w3-container w3-teal">
          
            <small>Build With Love and Code ;)</small>
          </footer>
        </div>
      </div>
    );
    }
  }

export default App;
