import { useState, useEffect } from 'react'
import axios from 'axios'


const ArmorCreate = () => {

    const [helmOptions, setHelmOptions] = useState([])
    const [chestOptions, setChestOptions] = useState([])
    const [legOptions, setLegOptions] = useState([])
    const [selectedHelm, setSelectedHelm] = useState('')
    const [selectedChest, setSelectedChest] = useState('')
    const [selectedLeg, setSelectedLeg] = useState('')

    const fetchHelms = async () => {
        await 
            axios
                .get('/helms')
                .then(res => {
                    setHelmOptions(res.data)
                    console.log('line 16', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
    }

    const fetchChest = async () => {
        await 
            axios
                .get('/chest')
                .then(res => {
                    setChestOptions(res.data)
                    console.log('line 29', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
    }

    const fetchLeg = async () => {
        await 
            axios
                .get('/leg')
                .then(res => {
                    setLegOptions(res.data)
                    console.log('line 42', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
    }

    useEffect(() => {
        fetchHelms()
        fetchChest()
        fetchLeg()
    }, [])
    
    const handleHelmSelection = (e) => {
        setSelectedHelm(e.target.value)
        console.log('line 61', e.target.value)
    }

    const handleChestSelection = (e) => {
        setSelectedChest(e.target.value)
        console.log('line 66', e.target.value)
    }

    const handleLegSelection = (e) => {
        setSelectedLeg(e.target.value)
        console.log('line 71', e.target.value)
    }

    console.log('line 74', helmOptions)
    console.log('line 75', chestOptions)
    console.log('line 76', legOptions)

    const mappedHelm = helmOptions.map(h => {
        return (
            <select value={selectedHelm} onChange={handleHelmSelection}>
                <option>Select...</option>
                <option>{h.helmName}</option>
            </select>
        )
    })

    const mappedChest = chestOptions.map(c => {
        return (
            <select value={selectedChest} onChange={handleChestSelection}>
                <option>Select...</option>
                <option>{c.chestName}</option>
            </select>
        )
    })

    const mappedLeg = legOptions.map(le => {
        return (
            <select value={selectedLeg} onChange={handleLegSelection}>
                <option>Select...</option>
                <option>{le.legName}</option>
            </select>
        )
    })

    return (
        <div>
            <form>
                {mappedHelm}
                {mappedChest}
                {mappedLeg}
            </form>
        </div>
    )
}

export default ArmorCreate