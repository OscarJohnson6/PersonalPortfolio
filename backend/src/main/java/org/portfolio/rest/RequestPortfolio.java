package org.portfolio.rest;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

/**
 * The type Request portfolio.
 */
@ApplicationPath("/portfolio")
public class RequestPortfolio extends Application{

    @Override
    public Set<Class<?>> getClasses() {
        HashSet<Class<?>> h = new HashSet<>();

        h.add(FanAccountsResponse.class);

        return h;
    }
}
