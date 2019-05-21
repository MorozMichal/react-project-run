import React, { Component } from 'react';
import PreviewsContent from './PreviewsContent'
import PreviewsRacing from './PreviewsRacing'
import PreviewsArrow from './PreviewsArrow'
import PreviewsSearch from './PreviewsSearch';

// const dateNow = new Date().getFullYear().toString()
class Previews extends Component {
    state = {
        racing: [],
        racingMonth: [],
        arrayContent: [],
        classIcon: "fa-angle-left",
        classVisible: "",
        month: "0",
        year: "00-2019",
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

    }



    componentDidUpdate() {
        const { region } = this.state
        const aaa = this.state.racing.filter(array => array.region === region.slice(3))
        if (region === "00-dolnośląskie" || region === "00-kujawsko-pomorskie" || region === "00-lubelskie" || region === "00-lubuski" || region === "00-łódzkie" || region === "00-małopolskie" || region === "00-mazowieckie" || region === "00-opolskie" || region === "00-podkarpackie" || region === "00-podlaskie" || region === "00-pomorskie" || region === "00-śląskie" || region === "00-świętokrzyskie" || region === "00-warmińsko-mazurskie" || region === "00-wielkopolskie" || region === "00-zachodniopomorskie") {
            this.setState({
                region: region.slice(3),
                racingMonth: aaa
            })
        }
        const { year, month } = this.state
        const daataMin = year.length > 11 ? `${year.slice(3)}-${month.slice(3)}-01` : `${year}-${this.state.month}-01`;
        const daataMax = year.length > 11 ? `${year.slice(3)}-${month.slice(3)}-31` : `${year}-${month}-31`;
        console.log("to warunek min: " + daataMin);
        console.log("to warunek mix: " + daataMax);
        console.log("state - " + year);
        console.log("state - " + month);
        const bbbb = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax)
        if (month === "00-06" && (year === "00-2019" || year === "00-2020")) {
            this.setState({
                racingMonth: bbbb,
                year: year.slice(3),
                month: month.slice(3),

            })

        }
        console.log(bbbb)


    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     // console.log(prevState.year)
    //     return {
    //         prevState
    //     }

    // }

    // componentDidUpdate(newProps, prevState, year) {
    //     console.log(year)
    //     // console.log(newState.month)
    //     // console.log(newState.region)

    // }


    // handleMonth = (e) => {
    //     const { year, month, region } = this.state;

    // const { year, month, region } = e.target.value

    // this.setState({
    //     [e.target.name]: e.target.value,

    // });


    // if (month === "0" && year === "2019" && region === "all") {
    //     console.log("ok")
    // }

    // if (e.target.value === "all") {
    //     console.log("ok")
    //     console.log(this.state.region)
    // }

    // if (e.target.name === "month") {
    //     const daataMin = `${this.state.year}-${e.target.value}-01`
    //     const daataMax = `${this.state.year}-${e.target.value}-31`
    //     const region = this.state.region
    //     const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax && array.region === region)
    //     console.log(aaa)
    //     this.setState({
    //         racingMonth: aaa,
    //         // disabled: false
    //     })

    // }

    // if (e.target.name === "year") {
    //     const daataMin = `${e.target.value}-${this.state.month}-01`
    //     const daataMax = `${e.target.value}-${this.state.month}-31`
    //     const region = this.state.region
    //     const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax && array.region === region)
    //     this.setState({
    //         racingMonth: aaa
    //     })

    // }


    // if (e.target.name === "region") {
    //     const daataMin = `${this.state.year}-${this.state.month}-01`
    //     const daataMax = `${this.state.year}-${this.state.month}-31`
    //     const region = e.target.value
    //     const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax && array.region === region)
    //     this.setState({
    //         racingMonth: aaa
    //     })

    // }


    // if (e.target.name === "region" && e.target.value === "all") {
    //     const daataMin = `${this.state.year}-${this.state.month}-01`
    //     const daataMax = `${this.state.year}-${this.state.month}-31`
    //     const region = e.target.value
    //     const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax && array.region !== region)
    //     this.setState({
    //         racingMonth: aaa
    //     })

    // }


    // if (this.state.month === "0" && e.target.value !== "all") {
    //     const region = e.target.value
    //     const aaa = this.state.racing.filter(array => array && array.region === region)
    //     this.setState({
    //         racingMonth: aaa,
    //         // disabled: false
    //     })
    // }

    // if (e.target.value === "0" && this.state.region !== "all") {
    //     const region = this.state.region
    //     const aaa = this.state.racing.filter(array => array && array.region === region)
    //     this.setState({
    //         racingMonth: aaa,
    //         // disabled: false
    //     })
    // }

    // if (e.target.value === "0") {
    //     this.setState({
    //         racingMonth: this.state.racing,
    //         // disabled: true,
    //         year: new Date().getFullYear()
    //     })
    // }


    // }



    // handleMonth = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });

    //     if (e.target.name === "month") {
    //         const daataMin = `${this.state.year}-${e.target.value}-01`
    //         const daataMax = `${this.state.year}-${e.target.value}-31`
    //         const region = this.state.region
    //         const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax && array.region === region)
    //         console.log(aaa)
    //         this.setState({
    //             racingMonth: aaa,
    //             // disabled: false
    //         })

    //     }
    //     if (e.target.name === "year") {
    //         const daataMin = `${e.target.value}-${this.state.month}-01`
    //         const daataMax = `${e.target.value}-${this.state.month}-31`
    //         const region = this.state.region
    //         const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax && array.region === region)
    //         this.setState({
    //             racingMonth: aaa
    //         })

    //     }


    //     if (e.target.name === "region") {
    //         const daataMin = `${this.state.year}-${this.state.month}-01`
    //         const daataMax = `${this.state.year}-${this.state.month}-31`
    //         const region = e.target.value
    //         const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax && array.region === region)
    //         this.setState({
    //             racingMonth: aaa
    //         })

    //     }


    //     if (e.target.name === "region" && e.target.value === "all") {
    //         const daataMin = `${this.state.year}-${this.state.month}-01`
    //         const daataMax = `${this.state.year}-${this.state.month}-31`
    //         const region = e.target.value
    //         const aaa = this.state.racing.filter(array => array.date >= daataMin && array.date <= daataMax && array.region !== region)
    //         this.setState({
    //             racingMonth: aaa
    //         })

    //     }


    //     if (this.state.month === "0" && e.target.value !== "all") {
    //         const region = e.target.value
    //         const aaa = this.state.racing.filter(array => array && array.region === region)
    //         this.setState({
    //             racingMonth: aaa,
    //             // disabled: false
    //         })
    //     }
    //     if (e.target.value === "0" && this.state.region !== "all") {
    //         const region = this.state.region
    //         const aaa = this.state.racing.filter(array => array && array.region === region)
    //         this.setState({
    //             racingMonth: aaa,
    //             // disabled: false
    //         })
    //     }

    //     if (e.target.value === "0") {
    //         this.setState({
    //             racingMonth: this.state.racing,
    //             // disabled: true,
    //             year: new Date().getFullYear()
    //         })
    //     }
    // }


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