import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ducks } from './demo';
import DuckItem from './DuckItem';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5000/api/activities').then(response =>{
      setActivities(response.data);
      console.log(activities);
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content = 'Reactivities'/>
      <List>
      {activities.map( (activity: any) =>(
            <List.Item key={activity.id}>
                {activity.title}
            </List.Item>
          ))}
      </List>


    </div>
  );
}

export default App;

// user-u cand alege locatia, dupa se va alage locatia cu cele mai multe voturi