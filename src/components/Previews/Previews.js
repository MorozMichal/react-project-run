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
        disabled: true

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