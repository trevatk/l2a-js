
// createUser
async function createUser () {

    const requestOptions = {};

    try {
        let response = await fetch('', requestOptions);
        let data = await response.json();

        return data;

    } catch (err) {
        return err;
    }
}

exports.createUser = createUser;