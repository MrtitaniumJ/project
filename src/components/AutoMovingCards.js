import React from 'react'; // Import React

import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class AppItem extends React.Component {
    render = () => {
        var app = this.props.app;
        return <mobiscroll.Card theme="ios"  themeVariant="light">
                    <mobiscroll.CardContent>
                        <img className="md-img" src={app.image} draggable="false" alt="App Icon" />
                        <mobiscroll.CardTitle>{app.title}</mobiscroll.CardTitle>
                        <mobiscroll.CardSubtitle>{app.dev}</mobiscroll.CardSubtitle>
                        <div className="md-rank">{app.rank}<span className="mbsc-ic mbsc-ic-star3"></span></div>
                    </mobiscroll.CardContent>
                </mobiscroll.Card>;
    }
}

class App extends React.Component {
    render = () => {
        return  <div className="md-cards">
            <div className="md-card-cont">
                <h3>New & Updated Games</h3>
                <mobiscroll.ScrollView className="demo-card" layout="fixed" itemWidth={134} snap={false} theme="ios"  themeVariant="light">
                    {this.props.newGames.map(function(app) {
                        return <AppItem app={app} key={app.id} />;
                    })}
                </mobiscroll.ScrollView>
                
                {/* Rest of your code */}
                
            </div>
        </div>;
    }
    
    // Rest of your code
}

export default App; // Export your App component
