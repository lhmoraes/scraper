﻿declare module "superagent" {
	module superagent {
		interface Response {
			text: string;
			body: any;
			files: any;
			res: any;
			header: any;
			type: string;
			charset: string;
			status: number;
			statusType: number;
			info: boolean;
			ok: boolean;
			redirect: boolean;
			clientError: boolean;
			serverError: boolean;
			error: any;
			accepted: boolean;
			noContent: boolean;
			badRequest: boolean;
			unauthorized: boolean;
			notAcceptable: boolean;
			notFound: boolean;
			forbidden: boolean;
			get(header: string): string;
		}

		interface Request {
			attach(field: string, file: string, filename: string): Request;
			redirects(n: number): Request;
			part(): Request;
			set(field: string, val: string): Request;
			set(field: Object): Request;
			get(field: string): string;
			type(val: string): Request;
			query(val: Object): Request;
			send(data: string): Request;
			send(data: Object): Request;
			write(data: string, encoding: string): boolean;
			write(data: NodeBuffer, encoding: string): boolean;
			pipe(stream: WritableStream, options?: Object): WritableStream;
			buffer(val: boolean): Request;
			timeout(ms: number): Request;
			clearTimeout(): Request;
			abort(): void;
			auth(user: string, name: string): Request;
			field(name: string, val: string): Request;
			end(callback?: (err: Error, res: Response) => void): Request;
		}

		interface Agent {
			get(url: string, callback?: (err: Error, res: Response) => void): Request;
			post(url: string, callback?: (err: Error, res: Response) => void): Request;
			put(url: string, callback?: (err: Error, res: Response) => void): Request;
			head(url: string, callback?: (err: Error, res: Response) => void): Request;
			del(url: string, callback?: (err: Error, res: Response) => void): Request;
			options(url: string, callback?: (err: Error, res: Response) => void): Request;
			trace(url: string, callback?: (err: Error, res: Response) => void): Request;
			copy(url: string, callback?: (err: Error, res: Response) => void): Request;
			lock(url: string, callback?: (err: Error, res: Response) => void): Request;
			mkcol(url: string, callback?: (err: Error, res: Response) => void): Request;
			move(url: string, callback?: (err: Error, res: Response) => void): Request;
			propfind(url: string, callback?: (err: Error, res: Response) => void): Request;
			proppatch(url: string, callback?: (err: Error, res: Response) => void): Request;
			unlock(url: string, callback?: (err: Error, res: Response) => void): Request;
			report(url: string, callback?: (err: Error, res: Response) => void): Request;
			mkactivity(url: string, callback?: (err: Error, res: Response) => void): Request;
			checkout(url: string, callback?: (err: Error, res: Response) => void): Request;
			merge(url: string, callback?: (err: Error, res: Response) => void): Request;
			//m-search(url: string, callback?: (err: Error, res: Response) => void): Request;
			notify(url: string, callback?: (err: Error, res: Response) => void): Request;
			subscribe(url: string, callback?: (err: Error, res: Response) => void): Request;
			unsubscribe(url: string, callback?: (err: Error, res: Response) => void): Request;
			patch(url: string, callback?: (err: Error, res: Response) => void): Request;
			parse(fn: Function): Request;
		}
	}

	function superagent(): superagent.Agent;

	export = superagent;
}