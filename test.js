/**
 * Created by laxminarayana on 4/20/2017.
 */

var additions = function (i,j,k,l){
    return i+j+k+l;
}
var subtractions = function (i,j,k,l){
    return (i+j)-(k+l);
}
var multiplications = function (i,j,k,l){
    return i*j*k*l;
}
var divisions = function (i,j,k,l){
    return (i*j)/(k+l);
}

exports.add=additions();
exports.sub=subtractions();
exports.mul=multiplications();
exports.div=divisions();

