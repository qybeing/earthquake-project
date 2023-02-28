import get_curves_and_points from './get_curves_and_points.json'
import get_points_and_transform1 from './get_points_and_transform1.json'
const Mock = require('mockjs')

Mock.mock('/mock/get_curves_and_points', 'get', {
    message: 'success',
    data: get_curves_and_points
})
Mock.mock('/mock/get_points_and_transform1', 'get', {
    message: 'success',
    data: get_points_and_transform1
})
