import { data1 } from './curveData'
export interface DataProps {
    network: string
    station: string
    location: string
    channel: string
    start_time: string
    end_time: string
    curve_data: Array<number>
}
export const seismicData: DataProps[] = [
    {
        network: 'SX',
        station: 'ANZ',
        location: '00',
        channel: 'BHE',
        start_time: '2022-10-19 04:38:24',
        end_time: '2022-10-19 04:42:33',
        curve_data: data1
    }
]
