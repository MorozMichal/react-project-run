
if (region === "all" && month === "00") {
    if (prevState.check10km !== this.state.check10km && this.state.check10km === true && this.state.check21km === true && this.state.check42km === true) {
        const allDateAllRegion = [...racing]
        this.setState({
            racingMonth: allDateAllRegion,
        })
        console.log("działa")
    }

    else if (prevState.check21km !== this.state.check21km && this.state.check21km === true && this.state.check10km === true && this.state.check42km === true) {
        const allDateAllRegion = [...racing]
        this.setState({
            racingMonth: allDateAllRegion,
        })
        console.log("działa")
    }

    else if (prevState.check42km !== this.state.check42km && this.state.check42km === true && this.state.check21km === true && this.state.check10km === true) {
        const allDateAllRegion = [...racing]
        this.setState({
            racingMonth: allDateAllRegion,
        })
        console.log("działa")
    }

    else if (prevState.check10km !== this.state.check10km && this.state.check10km === false && this.state.check21km === true && this.state.check42km === true) {
        const distanceMinus10 = this.state.racing.filter(distance => distance.distance !== "10km")
        this.setState({
            racingMonth: distanceMinus10,
        })
        console.log("działa bez 10")
    }

    else if (prevState.check21km !== this.state.check21km && this.state.check21km === false && this.state.check10km === true && this.state.check42km === true) {
        const distanceMinus21 = this.state.racing.filter(distance => distance.distance !== "21km")
        this.setState({
            racingMonth: distanceMinus21,
        })
        console.log("działa bez 21")
    }

    else if (prevState.check42km !== this.state.check42km && this.state.check42km === false && this.state.check21km === true && this.state.check10km === true) {
        const distanceMinus42 = this.state.racing.filter(distance => distance.distance !== "42km")
        this.setState({
            racingMonth: distanceMinus42,
        })
        console.log("działa bez 42")
    }


    else if (this.state.check10km === true && prevState.check42km !== this.state.check42km && this.state.check42km === false && this.state.check21km === false) {
        const distance10 = this.state.racing.filter(distance => distance.distance === "10km")
        this.setState({
            racingMonth: distance10,
        })
        console.log("działa 10 po zmianie 42")
    }
    else if (this.state.check10km === true && prevState.check21km !== this.state.check21km && this.state.check21km === false && this.state.check42km === false) {
        const distance10 = this.state.racing.filter(distance => distance.distance === "10km")
        this.setState({
            racingMonth: distance10,
        })
        console.log("działa 10 po zmianie 21")
    }

    else if (this.state.check21km === true && prevState.check42km !== this.state.check42km && this.state.check42km === false && this.state.check10km === false) {
        const distance21 = this.state.racing.filter(distance => distance.distance === "21km")
        this.setState({
            racingMonth: distance21,
        })
        console.log("działa 21 po zmianie 42")
    }
    else if (this.state.check21km === true && prevState.check10km !== this.state.check10km && this.state.check10km === false && this.state.check42km === false) {
        const distance21 = this.state.racing.filter(distance => distance.distance === "21km")
        this.setState({
            racingMonth: distance21,
        })
        console.log("działa 21 po zmianie 10")

    }

    else if (this.state.check42km === true && prevState.check21km !== this.state.check21km && this.state.check21km === false && this.state.check10km === false) {
        const distance42 = this.state.racing.filter(distance => distance.distance === "42km")
        this.setState({
            racingMonth: distance42,
        })
        console.log("działa 40 po zmianie 21")
    }
    else if (this.state.check42km === true && prevState.check10km !== this.state.check10km && this.state.check10km === false && this.state.check21km === false) {
        const distance42 = this.state.racing.filter(distance => distance.distance === "42km")
        this.setState({
            racingMonth: distance42,
        })
        console.log("działa 40 po zmianie 10")
    }

    else if (this.state.check10km === true && prevState.check42km !== this.state.check42km && this.state.check42km === false && this.state.check21km === true) {
        const distance10 = this.state.racing.filter(distance => distance.distance !== "42km")
        this.setState({
            racingMonth: distance10,
        })
        console.log("działa 10 po zmianie 42")
    }
    else if (this.state.check10km === true && prevState.check21km !== this.state.check21km && this.state.check21km === false && this.state.check42km === true) {
        const distance10 = this.state.racing.filter(distance => distance.distance !== "21km")
        this.setState({
            racingMonth: distance10,
        })
        console.log("działa 10 po zmianie 21")
    }

    else if (this.state.check21km === true && prevState.check42km !== this.state.check42km && this.state.check42km === false && this.state.check10km === true) {
        const distance21 = this.state.racing.filter(distance => distance.distance !== "42km")
        this.setState({
            racingMonth: distance21,
        })
        console.log("działa 21 po zmianie 42")
    }
    else if (this.state.check21km === true && prevState.check10km !== this.state.check10km && this.state.check10km === false && this.state.check42km === true) {
        const distance21 = this.state.racing.filter(distance => distance.distance !== "10km")
        this.setState({
            racingMonth: distance21,
        })
        console.log("działa 21 po zmianie 10")

    }

    else if (this.state.check42km === true && prevState.check21km !== this.state.check21km && this.state.check21km === false && this.state.check10km === true) {
        const distance42 = this.state.racing.filter(distance => distance.distance !== "21km")
        this.setState({
            racingMonth: distance42,
        })
        console.log("działa 40 po zmianie 21")
    }
    else if (this.state.check42km === true && prevState.check10km !== this.state.check10km && this.state.check10km === false && this.state.check21km === true) {
        const distance42 = this.state.racing.filter(distance => distance.distance !== "10km")
        this.setState({
            racingMonth: distance42,
        })
        console.log("działa 40 po zmianie 10")
    }

    else if (this.state.check10km === false && prevState.check42km !== this.state.check42km && this.state.check42km === true && this.state.check21km === true) {
        const distance10 = this.state.racing.filter(distance => distance.distance !== "10km")
        this.setState({
            racingMonth: distance10,
        })
        console.log("działa 10 po zmianie 42")
    }
    else if (this.state.check10km === false && prevState.check21km !== this.state.check21km && this.state.check21km === true && this.state.check42km === true) {
        const distance10 = this.state.racing.filter(distance => distance.distance !== "10km")
        this.setState({
            racingMonth: distance10,
        })
        console.log("działa 10 po zmianie 21")
    }

    else if (this.state.check21km === false && prevState.check42km !== this.state.check42km && this.state.check42km === true && this.state.check10km === true) {
        const distance21 = this.state.racing.filter(distance => distance.distance !== "21km")
        this.setState({
            racingMonth: distance21,
        })
        console.log("działa 21 po zmianie 42")
    }
    else if (this.state.check21km === false && prevState.check10km !== this.state.check10km && this.state.check10km === true && this.state.check42km === true) {
        const distance21 = this.state.racing.filter(distance => distance.distance !== "21km")
        this.setState({
            racingMonth: distance21,
        })
        console.log("działa 21 po zmianie 10")

    }

    else if (this.state.check42km === false && prevState.check21km !== this.state.check21km && this.state.check21km === true && this.state.check10km === true) {
        const distance42 = this.state.racing.filter(distance => distance.distance !== "42km")
        this.setState({
            racingMonth: distance42,
        })
        console.log("działa 40 po zmianie 21")
    }
    else if (this.state.check42km === false && prevState.check10km !== this.state.check10km && this.state.check10km === true && this.state.check21km === true) {
        const distance42 = this.state.racing.filter(distance => distance.distance !== "42km")
        this.setState({
            racingMonth: distance42,
        })
        console.log("działa 40 po zmianie 10")
    }

}
