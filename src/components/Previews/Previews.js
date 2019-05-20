import React, { Component } from 'react';
import PreviewsContent from './PreviewsContent'
import PreviewsRacing from './PreviewsRacing'
import PreviewsArrow from './PreviewsArrow'
import PreviewsSearch from './PreviewsSearch';


class Previews extends Component {
    state = {
        racing: [],
        racingMonth: [],
        arrayContent: [],
        classIcon: "fa-angle-left",
        classVisible: "",
        month: "0",
        year: "",
        region: "all",
        // disabled: false

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

            .catch(error => alert(error + "Nie pobrano danych JSON"))
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

        console.log(e.target.name)


        if (e.target.name === "month") {
            const daataMin = `${this.state.year}-${e.target.value}-01`
            const daataMax = `${this.state.year}-${e.target.value}-31`
            const region = this.state.region
            const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax && array.region === region)
            console.log(aaa)
            this.setState({
                racingMonth: aaa,
                // disabled: false
            })

        }
        if (e.target.name === "year") {
            const daataMin = `${e.target.value}-${this.state.month}-01`
            const daataMax = `${e.target.value}-${this.state.month}-31`
            const region = this.state.region
            const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax && array.region === region)
            this.setState({
                racingMonth: aaa
            })

        }


        if (e.target.name === "region") {
            const daataMin = `${this.state.year}-${this.state.month}-01`
            const daataMax = `${this.state.year}-${this.state.month}-31`
            const region = e.target.value
            const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax && array.region === region)
            this.setState({
                racingMonth: aaa
            })

        }


        if (e.target.name === "region" && e.target.value === "all") {
            const daataMin = `${this.state.year}-${this.state.month}-01`
            const daataMax = `${this.state.year}-${this.state.month}-31`
            const region = e.target.value
            const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax && array.region !== region)
            this.setState({
                racingMonth: aaa
            })

        }


        if (this.state.month === "0" && e.target.value !== "all") {
            const region = e.target.value
            const aaa = this.state.racing.filter(array => array && array.region === region)
            this.setState({
                racingMonth: aaa,
                // disabled: false
            })
        }
        if (e.target.value === "0" && this.state.region !== "all") {
            const region = this.state.region
            const aaa = this.state.racing.filter(array => array && array.region === region)
            this.setState({
                racingMonth: aaa,
                // disabled: false
            })
        }

        if (e.target.value === "0") {
            this.setState({
                racingMonth: this.state.racing,
                // disabled: true,
                year: new Date().getFullYear()
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
                racingMonth: this.state.racing,
                month: "00",

            })
        } else {
            this.setState({
                classIcon: "fa-angle-left",
                classVisible: ""

            })
        }

    }

    render() {

        const { arrayContent } = this.state
        return (
            <>
                <section className="section-previews">
                    <PreviewsContent
                        arrayContent={arrayContent}
                    />
                    <div className={`section-previews-racing ${this.state.classVisible}`}>
                        <PreviewsSearch
                            inputMonth={this.handleMonth}
                            month={this.state.month}
                            year={this.state.year}
                            region={this.state.region}
                            disabled={this.state.disabled}
                        />
                        <div>
                            <PreviewsArrow
                                icon={this.state.classIcon}
                                clickIcon={this.handleIcon}
                            />
                            <PreviewsRacing
                                racing={this.state.racingMonth}
                                click={this.handleClick}
                            />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Previews