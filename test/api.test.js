var api = require('../src/utils/GitAPI');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

// import api from '../src/utils/GitAPI'
// import chai from 'chai'
// import chaiAsPromised from 'chai-as-promised'

var expect = chai.expect;
var assert = chai.assert;

chai.should();
chai.use(chaiAsPromised);

describe('Git', function () {

	describe('#repo()', function () {
		// disable default timeout setting
		this.timeout(0);
		var params = { type: 'owner', sort: 'updated', direction: 'desc' };
		var promise = api.getRepos('zhijunzhou', params);

		it('result should contain property data', function () {
			return expect(promise).to.eventually.have.property('data');
		})

		it('data should be an array, and length equal to 30', function () {
			return promise.then(response => response.data).should.eventually.have.length(30);
		})

		it('the first item should contain property full_name', function () {
			return expect(promise.then(response => response.data[0])).to.eventually.have.property('full_name');
		})

		it('after sort, the first item should be custom-jenkins', function () {
			return assert.eventually.equal(promise.then(response => response.data[0]['name']), 'custom-jenkins');
		})
	})

})

