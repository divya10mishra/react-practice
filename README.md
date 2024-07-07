##

context-api

context api is a concept to avoid prop-drilling,
in which a common state is created at project level using useContext
it is updated at project level.

cons -  
if we have big application either create multiple context (again a sort of complex structure) or single huge state which will render in minute updates
