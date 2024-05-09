package org.portfolio.controller;

import org.portfolio.database.GenericDao;
import org.portfolio.entity.FanAccounts;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * A simple servlet.
 *
 * @author OscarJohnson6
 */
@WebServlet(
        urlPatterns = {"/fanAccountAdmin"}
)
public class FanAccountsServlet extends HttpServlet {

    /**
     * This method forwards the request to the "error.jsp" page, setting attributes
     * for the title.
     *
     * @param req  the http request object representing the client's request
     * @param resp the http response object representing the servlet's response
     * @throws ServletException if the servlet encounters difficulty while handling the request
     * @throws IOException      if an input or output error occurs while the servlet is handling the request
     */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        GenericDao<FanAccounts> dao = new GenericDao<>(FanAccounts.class);
        List<FanAccounts> fanAccounts = dao.getAll();
        req.setAttribute("fanAccounts", fanAccounts);

        RequestDispatcher dispatcher = req.getRequestDispatcher("fanAccounts.html");
        dispatcher.forward(req, resp);
    }
}