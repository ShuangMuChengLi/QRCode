/**
 * Created by lin on 2017/7/15.
 */
function testable(target) {
	target.isTestable = true;
}
@testable
class ColorPoint{
}
console.log(ColorPoint.isTestable);