const contains = (list, i) => list.indexOf(i) > -1;

export default function query(params) {
    const paramsKeys = Object.keys(params);

    return async(ctx, next) => {
        const query = ctx.request.query;
		const queryKeys = Object.keys(query);
		const keys = Array.from(new Set([...paramsKeys, ...queryKeys]))
        
        ctx.q = keys.reduce((q, key) => {
            if (contains(paramsKeys, key)) {
                let fn = params[key];
                q[key] = fn(q[key]);
            }
            return q;
        }, query);

        await next();
    };
}

export function toBoolean() {
    return function (query) {
		const value = query.toLowerCase();
        if (value == 'true') return true;
        if (value == 'false') return false;
        if (value == '1') return true;
        if (value == '0') return false;
        if (value == 'yes') return true;
        if (value == 'no') return false;
        return Boolean(value);
    }
}

export function toArray(sep) {
    return function (value) {
        return value.split(sep);
    }
}

