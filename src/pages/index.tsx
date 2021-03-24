import { useCache, useResource } from '@rest-hooks/core';
import { Resource } from '@rest-hooks/rest';
import { NextPage } from 'next';
import React, { FC, ReactElement } from 'react';

export class TodoResource extends Resource {
	static urlRoot = 'https://jsonplaceholder.typicode.com/todos';

	readonly id: number | undefined = undefined;
	readonly title: string = '';

	pk(): string {
		return this.id?.toString();
	}
}

const CacheTest: FC = (): ReactElement => {
	const todos = useCache(TodoResource.list(), {});
	return <>{todos[0]?.title}</>;
};

const Page: NextPage = () => {
	const todos = useResource(TodoResource.list(), {});

	return (
		<>
			<CacheTest />
			{todos.map((todo) => (
				<p key={todo.id}>{todo.title}</p>
			))}
		</>
	);
};

export { Page as default };
