import get_curves_and_points from './get_curves_and_points.json'
const Mock = require('mockjs')

Mock.mock('/mock/get_curves_and_points', 'get', {
    message: 'success',
    data: get_curves_and_points
})
