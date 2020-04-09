import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID Jsku3jSWuOXN7xxCJvTi4wIO_DJ5bQAfmpaQzrPcDLg",
      },
});