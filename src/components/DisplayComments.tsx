import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';

export const DisplayComments = (props: any) => {
    const [getStories, setStories] = useState([]);
    const [getComments, setComments] = useState(null as any)

    const getAPIData = async () =>{
         const result = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`).
                then(({data}) => {
                 return data;
                })
                setStories(result.slice(0, 10));
                return result.slice(0, 10);
    }

    const showCommentsHandler = async(id:number) => {
        const result  = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then(({data})=>{
        return data;
        });
        setComments(result);
        return result;
    }

    useEffect(()=>{
        getAPIData();
    }, []);


    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide block">
                    <div className="ui devided list">
                        {getStories.map((key, val) => {
                             return(
                                <div className="item" key={`key-${val}`}>
                                    <div className="left floated content" onClick={ ()=> showCommentsHandler(key)}>{key}
                                     </div>
                                </div>
                            )
                        })}
        </div>
        {getComments && 
            <div className="right floated content">{getComments.title}</div>
        }
                </div>
            </div>
        </div>
    )
}