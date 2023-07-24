
function Dashboard() {
    return (

        <div className="">

            <section id="projects" class="w-3/5 mx-auto mb-10">
                <h2 class="font-bold text-xl mb-6">Projects</h2>

                {/* <% if (projects) {%>
          <%projects.map(project=> { %>
            <a href="/projects/<%= project._id%>"
              class="block p-4 mb-4 bg-gray-300 text-zinc-800 font-semibold transition-all hover:bg-gray-400">
              <%= project.title%>
            </a>
            <%})%>
              <%} else {%>
                <p>There aren't any projects currently ☹</p>
                <%}%> */}

            </section>

            <section id="tickets" class="w-3/5 mx-auto">
                <h2 class="font-bold text-xl mb-6">Developers</h2>

                {/* <% members.map(member=> {%>
          <a href="#" class="block p-4 mb-4 bg-gray-300 text-zinc-800 font-semibold transition-all hover:bg-gray-400">
            <div class="flex flex-wrap justify-between items-center">
              <span class="">
                <%= member.username %>
              </span>

              <span class="font-bold text-gray-800">
                <span class="font-normal text-gray-500">role: </span>
                <%= member.role%>
              </span>

              <span class="font-bold text-gray-800">
                <span class="font-normal text-gray-500">Joined: </span>
                <%= member.startedAt %>
              </span>
            </div>
          </a>
          <%})%> */}
            </section>
        </div>
    )
}

export default Dashboard