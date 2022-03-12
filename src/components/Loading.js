import React from "react";
import { TailSpin } from "react-loader-spinner";

/**
 * Defines loading spinner when fetching data.
 *
 *
 * @returns {JSX.Element}
 */

function Loading() {
	return (
		<div className="flex justify-center items-center">
			<TailSpin color="#00BFFF" height={550} width={80} />
		</div>
	);
}

export default Loading;
