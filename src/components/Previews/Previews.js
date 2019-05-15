import React, { Component } from 'react';
import PreviewsContent from './PreviewsContent'
import PreviewsRacing from './PreviewsRacing'

class Previews extends Component {
    state = {
        racing: [],
        arrayContent: [],
        classIcon: "fa-angle-left",
        classVisible: ""

    }

    componentDidMount() {
        fetch('racing.json')  //in public folder
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw Error("błąd!!!!")

            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    racing: data.racing
                })
            })
            .catch(error => console.log(error + " cos nie tak"))
    }

    handleClick = (id) => {
        const lista = [...this.state.racing];
        const index = lista.findIndex(list => list.id === id)
        const arrayTarget = lista.slice(index, index + 1)
        this.setState({
            arrayContent: arrayTarget
        })
    }

    handleIcon = () => {
        this.setState({
            arrayContent: [],
        })
        if (this.state.classIcon === 'fa-angle-left') {
            this.setState({
                classIcon: "fa-angle-right",
                classVisible: "section-previews-racing-visible"

            })
        } else {
            this.setState({
                classIcon: "fa-angle-left",
                classVisible: ""

            })
        }

    }

    render() {
        const { racing, arrayContent } = this.state
        return (
            <>
                <section className="section-previews">
                    <PreviewsContent
                        arrayContent={arrayContent}
                    />
                    {racing ?
                        <PreviewsRacing
                            racing={racing}
                            click={this.handleClick}
                            classVisible={this.state.classVisible}
                            icon={this.state.classIcon}
                            clickIcon={this.handleIcon} />
                        : racing}
                </section>
            </>
        )
    }
}

export default Previews