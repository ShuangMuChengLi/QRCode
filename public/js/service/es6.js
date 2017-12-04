/**
 * Created by lin on 2017/7/15.
 */

function Es6Test() {
	function testable(target) {
		target.isTestable = true;
	}
	@testable
	class ColorPoint{
	}
	console.log(ColorPoint.isTestable);
}
module.exports = Es6Test;