import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetail 
                    author="Sam" 
                    text={ faker.lorem.lines() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    text={ faker.lorem.lines() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Trent" 
                    text={ faker.lorem.lines() }
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={ faker.internet.userName() } 
                    text={ faker.lorem.lines() }
                />
            </ApprovalCard>
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));