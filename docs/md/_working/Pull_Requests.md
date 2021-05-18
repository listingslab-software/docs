
## Pull Request 

Pull Requests are how developers deliver their work. 

At this point the developer isn't finished, they're just asking for a review. 
The developer wraps up their work, documents it, cleans up their code, 
and makes a final github commit before creating a Templated Pull Request on GitHub. 
The PR Template contains information for testing, context etc 

The Pull Request opens up the converstation with both sides trying to 
answer the same question...

> "Are we ready to mark this work as done and accept the changes into our tech stack?"

#### devtest branches

Assume the repository's `develop` branch is the furthest forward and 
`listingslab` is the value for `<candidate_name>`. 

Listingslab clones the repo, creates his own branch and can now work 
independently until it's time for a Pull Request

__#bringbackunix__

```bash
cd <working_dir>
git clone https://github.com/listingslab-software/advicator.git
cd advicator
git checkout develop
git checkout -b devtests/<candidate_name>
touch ./docs/devtests/<candidate_name>.md
git add .
git commit -m '<candidate_name> first commit'
git push
```
That will create a timestamped branch called `devtests/listingslab` 
which is one commit ahead of develop and will be merged back into develop on completion. 

Listingslab now creates a A Draft Pull Request & gets on with the job. 
The list of commits he makes along with their timestamps are useful
