import React, { Component } from 'react';
import PreviewsContent from './PreviewsContent'
import PreviewsRacing from './PreviewsRacing'


class Previews extends Component {
    state = {
        racing: [],
        racingMonth: [],
        arrayContent: [],
        classIcon: "fa-angle-left",
        classVisible: "",
        month: "00",
        year: new Date().getFullYear(),
        disabled: false

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
                    racing: data.racing,
                    racingMonth: data.racing
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

    handleMonth = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        });

        if (e.target.value === "00") {
            this.setState({
                racingMonth: this.state.racing,
                disabled: true,
                year: new Date().getFullYear()
            })

        } else if (e.target.value.length === 2) {
            const daataMin = `${this.state.year}-${e.target.value}-01`
            const daataMax = `${this.state.year}-${e.target.value}-31`
            const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax)
            this.setState({
                racingMonth: aaa,
                disabled: false
            })

        } else if (e.target.value.length === 4) {
            const daataMin = `${e.target.value}-${this.state.month}-01`
            const daataMax = `${e.target.value}-${this.state.month}-31`
            const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax)
            this.setState({
                racingMonth: aaa
            })

        }
    }

    handleIcon = () => {
        this.setState({
            arrayContent: [],
        })
        if (this.state.classIcon === 'fa-angle-left') {
            this.setState({
                classIcon: "fa-angle-right",
                classVisible: "section-previews-racing-visible",
                // racingMonth: this.state.racing

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
                            racing={this.state.racingMonth}
                            click={this.handleClick}
                            classVisible={this.state.classVisible}
                            icon={this.state.classIcon}
                            clickIcon={this.handleIcon}
                            inputMonth={this.handleMonth}
                            month={this.state.month}
                            year={this.state.year}
                            disabled={this.state.disabled}
                        />
                        : racing}
                </section>
            </>
        )
    }
}

export default Previews