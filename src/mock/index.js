import get_all_curve_info from './get_all_curve_info.json'
import get_curve_info from './get_curve_info.json'
import get_curve_with_all_points from './get_curve_with_all_points.json'
import get_curve_with_part_points from './get_curve_with_part_points.json'

const Mock = require('mockjs')

Mock.mock('/mock/get_all_curve_info', 'get', {
    message: 'success',
    data: get_all_curve_info
})
Mock.mock('/mock/get_curve_info', 'get', {
    message: 'success',
    data: get_curve_info
})
Mock.mock('/mock/get_curve_with_all_points', 'get', {
    message: 'success',
    data: get_curve_with_all_points
})
Mock.mock('/mock/get_curve_with_part_points', 'get', {
    message: 'success',
    data: get_curve_with_part_points
})
