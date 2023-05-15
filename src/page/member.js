import React from 'react'

export default function Member() {
    return (
        <div>

            <body>

                <div align="center" class="container mt-3">
                    <h2>Member Table</h2>
                    <table align="center" class="table table-hover">
                        <thead>
                            <tr align="center">
                                <th>Picture</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody align="center">
                            <tr>
                                <td><img src="./images/p1.jpg" width={"50"} /></td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                                <td><button type="button" class="btn btn-success">Read more</button></td>
                            </tr>
                            <tr>
                                <td><img src="./images/p2.jpg" width={"50"} /></td>
                                <td>Mary</td>
                                <td>Moe</td>
                                <td>mary@example.com</td>
                                <td><button type="button" class="btn btn-success">Read more</button></td>
                            </tr>
                            <tr>
                                <td><img src="./images/p3.jpg" width={"50"} /></td>
                                <td>July</td>
                                <td>Dooley</td>
                                <td>july@example.com</td>
                                <td><button type="button" class="btn btn-success">Read more</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </body>

        </div>
    )
}