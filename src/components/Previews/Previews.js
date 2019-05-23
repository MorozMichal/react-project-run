import React, {
    Component
} from 'react';
import PreviewsContent from './PreviewsContent'
import PreviewsRacing from './PreviewsRacing'
import PreviewsArrow from './PreviewsArrow'
import PreviewsSearch from './PreviewsSearch';

const yearNow = new Date().getFullYear().toString()

class Previews extends Component {
    state = {
        racing: [],
        racingMonth: [],
        arrayContent: [],
        classIcon: "fa-angle-left",
        classVisible: "",
        month: "00",
        year: yearNow,
        region: "all",
        disabled: true,
        check42km: true,
        check21km: true,
        check10km: true,

    }

    handleCheck = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        })

    }

    componentDidMount() {
        fetch('racing.json') //in public folder
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

    componentDidUpdate(prevProps, prevState) {
        const dateMin = `${this.state.year}-${this.state.month}-01`
        const dateMax = `${this.state.year}-${this.state.month}-31`
        const { racing, region, month, year } = this.state

        if (this.state.check42km === true && prevState.check42km !== this.state.check42km) {
            const distance42 = this.state.racing.filter(distance => distance.distance === "42km")
            this.setState({
                racingMonth: distance42,

            })
        }

        else if (prevState.check42km !== this.state.check42km) {
            const distance42 = this.state.racing.filter(distance => distance.distance !== "42km")
            this.setState({
                racingMonth: distance42,

            })
        }

        if (this.state.check21km === true && prevState.check21km !== this.state.check21km) {
            const distance21 = this.state.racing.filter(distance => distance.distance === "21km")
            this.setState({
                racingMonth: distance21,

            })
        }

        else if (prevState.check21km !== this.state.check21km) {
            const distance21 = this.state.racing.filter(distance => distance.distance !== "21km")
            this.setState({
                racingMonth: distance21,

            })
        }
        // }
        // if (this.state.check21km === true) {
        //     const distance21 = this.state.racing.filter(distance => distance.distance === "21km")
        //     console.log(distance21)
        // }

        // if (this.state.check10km === true) {
        //     const distance10 = this.state.racing.filter(distance => distance.distance === "10km")
        //     console.log(distance10)
        // }

        //wrzucono do osobnych if żeby nie generowało się za każdym razem
        // const oneRegionOneDate = racing.filter(array => array.region === region && array.date >= dateMin && array.date <= dateMax)
        // const allDateOneRegion = racing.filter(array => array.date && array.region === region)
        // const allRegionOneDate = racing.filter(array => array.date >= dateMin && array.date <= dateMax && array.region)
        // const allDateAllRegion = [...racing]

        if (prevState.region !== region && region === "all" && month === "00") {
            const allDateAllRegion = [...racing]
            console.log(allDateAllRegion)
            this.setState({
                racingMonth: allDateAllRegion,
                disabled: true
            })

        }

        else if (prevState.month !== month && region === "all" && month === "00") {
            const allDateAllRegion = [...racing]
            console.log(allDateAllRegion)
            this.setState({
                racingMonth: allDateAllRegion,
                disabled: true
            })

        }

        else if (month === "00" && prevState.month !== month) {
            const allDateOneRegion = racing.filter(array => array.date && array.region === region)
            console.log(allDateOneRegion)
            this.setState({
                racingMonth: allDateOneRegion,
                year: yearNow,
                disabled: true
            })

        }

        else if (region === "all" && prevState.region !== region) {
            const allRegionOneDate = racing.filter(array => array.date >= dateMin && array.date <= dateMax && array.region)
            console.log(allRegionOneDate)
            this.setState({
                racingMonth: allRegionOneDate,
                disabled: false
            })

        }

        else if (prevState.region !== region && month === "00") {
            const allDateOneRegion = racing.filter(array => array.date && array.region === region)
            console.log(allDateOneRegion)
            this.setState({
                racingMonth: allDateOneRegion,
                year: yearNow,
                disabled: true

            })

        }

        else if (prevState.month !== month && region === "all") {
            const allRegionOneDate = racing.filter(array => array.date >= dateMin && array.date <= dateMax && array.region)
            console.log(allRegionOneDate)
            this.setState({
                racingMonth: allRegionOneDate,
                disabled: false
            })

        }
        else if (prevState.year !== year && month === "00") {
            const allDateOneRegion = racing.filter(array => array.date && array.region === region)
            console.log(allDateOneRegion)
            this.setState({
                racingMonth: allDateOneRegion,
                disabled: true

            })

        }

        else if (prevState.year !== year && region === "all") {
            const allRegionOneDate = racing.filter(array => array.date >= dateMin && array.date <= dateMax && array.region)
            console.log(allRegionOneDate)
            this.setState({
                racingMonth: allRegionOneDate,
                disabled: false

            })

        }

        else if (prevState.month !== month || prevState.year !== year || prevState.region !== region) {
            const oneRegionOneDate = racing.filter(array => array.region === region && array.date >= dateMin && array.date <= dateMax)
            console.log(oneRegionOneDate)
            this.setState({
                racingMonth: oneRegionOneDate,
                disabled: false
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

        const { arrayContent, racingMonth, classVisible, year, month, region, disabled, classIcon } = this.state
        return (
            <>
                <section className="section-previews" >
                    <PreviewsContent
                        arrayContent={arrayContent}
                    />
                    <div className={`section-previews-racing ${classVisible}`}>
                        <PreviewsSearch inputMonth={this.handleMonth}
                            month={month}
                            year={year}
                            region={region}
                            disabled={disabled}
                            check42km={this.state.check42km}
                            check21km={this.state.check21km}
                            check10km={this.state.check10km}
                            checked={this.handleCheck}
                        />
                        <div>
                            <PreviewsArrow icon={classIcon}
                                clickIcon={this.handleIcon}
                            />
                            <PreviewsRacing
                                racing={racingMonth}
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