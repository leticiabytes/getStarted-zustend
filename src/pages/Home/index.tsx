import useUserStore from "../../stores/user";

export function Home() {
	const users = useUserStore(state => state.users);

	return (
		<div>
			{users?.map((user) => (
				<p key={Math.random()}> {user.name} | {user.email} </p>
			))}
		</div>
	);
}