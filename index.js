const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
      res.send('Server is running');
});

app.post('/signup', (req, res) => {
      const { username, email, password, dateOfBirth } = req.body;

        if (!username) {
                res.status(400).json({ error: 'Username cannot be empty' });
                    return;
        }

          if (!email) {
                res.status(400).json({ error: 'Email cannot be empty' });
                    return;
          }


          if (!password || password.length < 8 || password.length > 16) {
            res.status(400).json({ error: 'Password length should be greater than 8 or less than or equalal to 16' });
                return;
      }
    
        res.status(200).json({
                message: 'User registered successfully',
                    user: {username,email, dateOfBirth    }
     });


          }
        
)

    app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
});
            
            