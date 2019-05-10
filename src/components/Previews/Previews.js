import React, { Component } from 'react';
import PreviewsContent from './PreviewsContent'
import PreviewsRacing from './PreviewsRacing'




const API = ""

class Previews extends Component {
    state = {
        racing: null
    }

    handleRacing = () => {

        console.log("click")
        fetch(API)
            .then(response => response.json())
            .then(json => console.log(json));
        // .then(response => {
        //     if (response.ok) {
        //         return response;
        //     }
        //     throw Error("błąda!!!!")

        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     this.setState({
        //         racing: data.racing
        //     })
        // })
        // .catch(error => console.log(error + " cos nie tak"))
    }


    render() {
        return (
            <>
                <section className="section-previews">
                    <h1>Sekcja Zapowiedzi</h1>
                    <PreviewsContent />
                    <button onClick={this.handleRacing}>pobierz zawody</button>
                    <PreviewsRacing />
                </section>
            </>
        )
    }
}

export default Previews